export default function Tags() {
  const tags = [
    {
      title: '#webdev'
    },
    {
      title: '#javascript'
    },
    {
      title: '#beginners'
    },
    {
      title: '#programming'
    },
    {
      title: '#tutorial'
    },
    {
      title: '#react'
    },
    {
      title: '#python'
    },
    {
      title: '#productivity'
    },
    {
      title: '#devops'
    },
    {
      title: '#aws'
    },
    {
      title: '#opensource'
    },
    {
      title: '#webdev'
    },
    {
      title: '#webdev'
    },
    {
      title: '#webdev'
    },
    {
      title: '#webdev'
    },
    {
      title: '#webdev'
    },
    {
      title: '#webdev'
    },
    {
      title: '#webdev'
    },
    {
      title: '#webdev'
    },
    {
      title: '#webdev'
    },
    {
      title: '#webdev'
    },
    {
      title: '#webdev'
    },
    {
      title: '#webdev'
    },
    {
      title: '#webdev'
    },
    {
      title: '#webdev'
    },
    {
      title: '#webdev'
    },
    {
      title: '#webdev'
    },
    {
      title: '#webdev'
    },
    {
      title: '#webdev'
    },
    {
      title: '#webdev'
    },
    {
      title: '#webdev'
    },
    {
      title: '#webdev'
    },
    {
      title: '#webdev'
    },
    {
      title: '#webdev'
    },
    {
      title: '#webdev'
    },
    {
      title: '#webdev'
    },
    {
      title: '#webdev'
    },
    {
      title: '#webdev'
    },
    {
      title: '#webdev'
    },
  ]

  return (
      <div className="mt-7">
        <h2 className="text-xl font-bold font-gill">Popular Tags</h2>
      <div className="flex flex-col pl-8 max-h-[42dvh] max-w-[250px] overflow-y-auto mt-8">
        {tags.map((tag, idx) => (
          <div className="w-full" key={idx}>
            <a className="flex items-center w-full h-10 rounded-md text-[15px] hover:text-[#0000ff] hover:underline hover:bg-[#3b49df1a]" href='#'>{tag.title}</a>
          </div>
        ))}
      </div>
    </div>
  )
}
