export const mockCharacter = {
  data: {
    offset: 0,
    limit: 20,
    total: 1,
    count: 1,
    results: [
      {
        id: 1011334,
        name: '3-D Man',
        description:
          'An American test pilot, Charles Chandler was abducted by Skrulls looking to use Earth as a strategic position in their war with the Kree.',
        modified: '2014-04-29T14:18:17-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
          extension: 'jpg'
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011334',
        comics: {
          available: 12,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011334/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/21366',
              name: 'Avengers: The Initiative (2007) #14'
            }
          ],
          returned: 12
        },
        series: {
          available: 3,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011334/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1945',
              name: 'Avengers: The Initiative (2007 - 2010)'
            }
          ],
          returned: 3
        },
        stories: {
          available: 21,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011334/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/19947',
              name: 'Cover #19947',
              type: 'cover'
            }
          ],
          returned: 20
        },
        events: {
          available: 1,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011334/events',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/269',
              name: 'Secret Invasion'
            }
          ],
          returned: 1
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/characters/74/3-d_man?utm_campaign=apiRef&utm_source=22246f953045df9a0cdf31a81e7945a7'
          }
        ]
      }
    ]
  }
}
