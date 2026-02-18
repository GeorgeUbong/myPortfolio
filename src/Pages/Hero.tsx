import img from "../assets/react.svg";
import { ArrowDown, GitBranch, Github } from "lucide-react";


  const maker = {
    name: 'Ubongabasi',
    job: 'Web Developer',
    about: 'hello this is my about'
  };

  const projects = [
    {
        id: 1,
      name: 'Project 1',
      description: 'Description 1',
      image: img,
    },
    {
        id: 2,
      name: 'Project 2',
      description: 'Description 2',
      image: img,
    },
    {
        id: 3,
      name: 'Project 3',
      description: 'Description 3ikkushdcf isuhdciuhsd fiusdfhysiuhfuidfsuhdf uhcfuihusduisdaiufhyusdcfy uisdcufhyisu hduihsciusdhciushdciushics\n\
      jhaiu',
      image: img,
    },
  ];


export default function Hero() {


    return (
        <div className="border">
            <main className="min-h-screen mt-10  text-center p-6">
                {/**Hero section */}
                <section className=" ">
                    <div className="flex flex-col items-center">

                        <img src={img} alt="profile picture" className="w-20 h-20 mt-20 
                    animate-spin rounded-full hover:scale-110" />
                        <h1 className="text-5xl md:text-7xl 
                    mb-12 mt-10"> Hello, I'm <span className="text-blue-500 font-semibold">Ubongabasi </span><br />
                            George a</h1>

                            <h3 className="text-4xl font-bold">{maker.job}</h3>

                        <p className="md:text-xl mt-15">A passionate frontend developer, determined to bring solutions
                            through clean, efficient, and user-centric web development.
                        </p>

                        <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 font-bold text-white">
    
    <button className="w-full md:w-auto bg-blue-800 p-4 px-8 rounded-full 
    flex flex-row items-center justify-center gap-2 transition-transform active:scale-95 hover:scale-110 hover:shadow-lg
    hover:bg-orange-500 transition-100">
        <span>See Projects</span>
        <GitBranch size={20} />
    </button>

    <button className="w-full md:w-auto bg-white border border-gray-200 p-4 px-8
     rounded-full flex flex-row items-center justify-center 
     gap-2 text-black transition-transform active:scale-95 hover:scale-110 hover:shadow-sm">
        <span>View Github</span>
        <Github size={20} />
    </button>
    
</div>
                    </div>
                </section>


                {/**About me and projects */}
                <section className="mt-30">
                    <div className="text-left">
                        <h1 className="mb-8
                        text-4xl font-semibold">Projects</h1>
                        <p>{maker.about}</p>

                        {/**list */}
                        <div className="flex flex-col gap-12 p-4 max-w-6xl mx-auto">
  {projects.map((project) => (
    <div
      key={project.id}
      className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16 p-2 border group"
    >
      {/* IMAGE SECTION (Right side on Desktop) */}
      <div className="w-full md:w-1/2 overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-xl transition-transform duration-500 group-hover:scale-[1.02]">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-64 md:h-80 object-cover"
        />
      </div>

      {/* TEXT SECTION (Left side on Desktop) */}
      <div className="w-full md:w-1/2 flex flex-col space-y-4">
        <h3 className="text-3xl md:text-4xl font-bold">
          {project.name}
        </h3>
        
   

        <p className=" text-lg leading-relaxed">
          {project.description}
        </p>

        
      </div>
    </div>
  ))}
</div>
                    </div>
                </section>

                {/** */}
            </main>
        </div>
    )
}