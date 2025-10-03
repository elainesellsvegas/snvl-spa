import Header from './components/Header'
import VideoPlayer from './components/VideoPlayer'
import ShowBio from './components/ShowBio'
import HostProfiles from './components/HostProfiles'
import FeaturedEpisodes from './components/FeaturedEpisodes'
import Footer from './components/Footer'
import { showBio, hosts, featuredVideo } from './data/content'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <ShowBio 
        title={showBio.title}
        subtitle={showBio.subtitle}
        description={showBio.description}
      />
      <HostProfiles hosts={hosts} />
      <VideoPlayer 
        src={featuredVideo.src}
        title={featuredVideo.title}
        description={featuredVideo.description}
      />
      <FeaturedEpisodes />
      <Footer />
    </div>
  )
}

export default App
