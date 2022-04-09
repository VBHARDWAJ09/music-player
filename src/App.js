import {useState,useEffect} from 'react';
import Player from './components/Player';
function App() {

  const [songs,setSongs] = useState([
    {
      title:"Forget me too ft.Halsey",
      artist:"Machine Gun Kelly",
      img_src:"./images/song-1.jpg",
      src:"./music/On-and-On.mp3"
    },
    {
      title:"Lovely",
      artist:"Artist 2",
      img_src:"./images/song-2.jpg",
      src:"./music/Lovely.mp3"
    },
    {
      title:"Let Me Down Slowly",
      artist:"Artist 3",
      img_src:"./images/song-3.jpg",
      src:"./music/Let-Me-Down-Slowly.mp3"
    },
    {
      title:"Harleys-In-Hawaii",
      artist:"Artist 4",
      img_src:"./images/song-4.png",
      src:"./music/Harleys-In-Hawaii.mp3"
    }
  ]);

  const [currentSongIndex,setCurrentSongIndex] = useState(0);
  const [nextSongIndex,setNextSongIndex] = useState(currentSongIndex+1);

  useEffect(()=>{
    setNextSongIndex(()=>{
      if(currentSongIndex+1>songs.length-1){
        return 0;
      }else{
        return currentSongIndex+1;
      }
    });
  },[currentSongIndex])

  return (
    <div className="App">
      <Player 
        currentSongIndex ={currentSongIndex}
        setCurrentSongIndex = {setCurrentSongIndex}
        nextSongIndex = {nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
