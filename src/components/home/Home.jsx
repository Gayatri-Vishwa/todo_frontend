import './home.css'
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/todo');
  };

  return (
     <>
    <div className="flex justify-center px-4">
      <div className="home flex justify-center items-center text-center flex-col gap-6 w-full">
        
        <div className="container max-w-3xl">
          {/* <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight"> */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            Organize your <br /> work and life, finally
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            Become focused, organised and calm with <br className="hidden sm:block" />
            todo app. The World's #1 task manager app
          </p>

          <button className="btn mt-4" onClick={handleClick}>
            Make Todo
          </button>
        </div>

      </div>
    </div>
 
    </>
  );
}

export default Home;
