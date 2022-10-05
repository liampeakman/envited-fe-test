import image1 from './image1.svg';

function App() {
  return (
    <div class="p-10 grid justify-center lg:gap-10 gap-5 h-screen lg:h-auto place-items-center">
      <div class="flex flex-col gap-5">
        <h1 class="text-purple lg:text-6xl md:text-5xl text-4xl font-extrabold text-center">Imagine if <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#8456EC] to-[#E87BF8]">Snapchat</span><br />
          had events.</h1>
        <span class="lg:text-xl text-md font-light text-center text-[#4F4F4F]">
          Easily host and share events with your friends across any social media.
        </span>
      </div>

      <div class="flex justify-center">
        <img class="shadow-lg rounded-3xl lg:w-[311px] md:w-[220px] w-[165px] m-5" src={image1}></img>
      </div>
      <button class="text-white hover:bg-blue-70 font-bold p-4 lg:text-lg text-md rounded-lg bg-gradient-to-r from-[#8456EC] to-[#E87BF8] lg:w-[320px] m-auto">🎉 Create my event</button>
    </div >
  );
}

export default App;
