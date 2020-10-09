export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f804096e711226603fd6e4f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-doab96nv',
                  apiId: '29b8b296-1224-4a1d-b7ee-1515c9190cbf'
                },
                {
                  buildHookId: '5f804096a5c001757fe8a901',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-q1oobpqp',
                  apiId: '5c9df74e-039e-4155-9303-90cd054e698d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/herda1/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-q1oobpqp.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
