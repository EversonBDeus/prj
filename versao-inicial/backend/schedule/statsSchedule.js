const schedule = require('node-schedule')


module.exports = app =>{
        // Agendando a execução da função a cada minuto
    schedule.scheduleJob('*/1 * * * *', async function(){
        // Obtendo a contagem de usuários, categorias e artigos do banco de dados
        const usersCount = await app.db('users').count('id').first()
        const categoriesCount = await app.db('categories').count('id').first()
        const articlesCount = await app.db('articles').count('id').first()
        
        const {Stat} = app.api.stats
        // Obtendo a contagem de usuários, categorias e artigos do banco de dados
        const lastStat = await Stat.findOne({}, {}, {sort: {'createdAt' : -1 } })
        // Criando uma nova estatística com os valores obtidos
        const stat = new Stat({
            users: usersCount.cont,
            categories: categoriesCount.cont,
            articles: articlesCount.cont,
            createdAt: new Date()
        })
         // Verificando se houve mudanças em relação à última estatística registrada
        const changeUser = !lastStat || stat.user !== lastStat.users 
        const changeCategories = !lastStat || stat.categories !== lastStat.categories
        const changeArticles = !lastStat || stat.articles !== lastStat.articles
         // Salvando a nova estatística no banco de dados, se houver mudanças
        if(changeUser || changeCategories || changeArticles){
            stat.save().then(() => console.log('\x1b[32m%s\x1b[0m', '[Satat] Estastíticas atualizadas!' ,'\x1b[0m'));
        }
    })
}
