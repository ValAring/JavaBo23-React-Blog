import './App.css'
import Blog from './Blog'
import Footer from './Footer'
import Header from './Header'
import Team from './Team'


export default function App() {

  return (
    <>
      <Header />
        <div className="blog-list">
            <Team />
            <Blog />
            <Blog />
        </div>
      <Footer />
    </>
  )
}
