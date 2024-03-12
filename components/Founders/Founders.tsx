const people = [
    {
      name: 'Jasmeet Singh Ghai',
      role: 'Co-Founder',
      imageUrl:
        'https://media.licdn.com/dms/image/C5603AQHYBVlKsqCJlw/profile-displayphoto-shrink_800_800/0/1638719885559?e=1700092800&v=beta&t=UitzBTjoDFBZpwtuptDbEngddJ4oDMxYh5jN7xIe4-w',
    },
    {
        name: 'Tanya Bhatia',
        role: 'Co-Founder',
        imageUrl:
          'https://media.licdn.com/dms/image/C5603AQHw2Sa7BBvLQA/profile-displayphoto-shrink_800_800/0/1598340711137?e=1700092800&v=beta&t=biDKkFMiN5dpuZGea-za1vKANludjrIStROClE4NX1k',
    },
  ]

export default function Founders() {
    return (
      <div className=" px-5 dark:bg-dark-bg py-24 sm:py-32 ">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-2">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">Our leadership</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
              Meet the expert minds behind our operations at Ecowitty
            </p>
          </div>
          <div className="mx-auto">
          <ul role="list" className="flex flex-col sm:flex-row gap-x-24 gap-y-16  sm:gap-y-16">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex sm:flex-col xl:flex-row items-center gap-x-6 ">
                  <img className="h-24 w-24 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-base font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          </div>
        </div>
      </div>
    )
  }