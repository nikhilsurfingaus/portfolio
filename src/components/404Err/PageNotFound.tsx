import './PNF.css'

const PageNotFound = () => {
  return (
    <div className='wrap'>
      <h1 className='title'>Oops!</h1>
      <h2 className='subtitle'>404 Page Not Found</h2>
      <p className='description'>The page you're looking for may have been removed or changed.</p>
      <a href='/home'>
        <button className='chat'>Go To Homepage</button>
      </a>
    </div>
  )
}

export default PageNotFound
