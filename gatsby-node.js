exports.onCreatePage = async ({page, actions})=> {
    const {createPage} = actions 

    if(page.path.match(/^\/account/)){
        page.matchPath = "/account/*"
    }

    createPage(page)
}

exports.onCreateWebpackConfig =({ stage, loaders, actions })=>{
    if(stage === "build-html"){
        actions.setWebpackConfig({
            modules:{
                rules:[
                    {
                        test: /auth0-js/,
                        use: loaders.null(),
                    },
                ],
            },
        })
    }
}

