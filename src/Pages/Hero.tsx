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
      name: 'BridgeBox Student',
      description: 'BridgeBox is an offline-first educational platform designed for unreliable internet environments.\n\
       It utilizes Next.js for the interface and Dexie.js to manage a persistent \n\
       IndexedDB database on the client device. By caching subjects, topics, and lessons \n\
       locally, the app ensures continuous learning and data persistence even during server outages \n\
       or power failures.',
      image: img,
    },
    {
        id: 2,
      name: 'HealthDB',
      description: 'BridgeBox is an offline-first educational platform designed for unreliable internet environments.\n\
       It utilizes Next.js for the interface and Dexie.js to manage a persistent \n\
       IndexedDB database on the client device. By caching subjects, topics, and lessons \n\
       locally, the app ensures continuous learning and data persistence even during server outages \n\
       or power failures.',
      image: img,
    },
    {
        id: 3,
      name: 'ArtInstitute',
      description: 'BridgeBox is an offline-first educational platform designed for unreliable internet environments.\n\
       It utilizes Next.js for the interface and Dexie.js to manage a persistent \n\
       IndexedDB database on the client device. By caching subjects, topics, and lessons \n\
       locally, the app ensures continuous learning and data persistence even during server outages \n\
       or power failures.',
      image: img,
    },
    {
        id: 3,
      name: 'TeacherBox',
      description: 'BridgeBox is an offline-first educational platform designed for unreliable internet environments.\n\
       It utilizes Next.js for the interface and Dexie.js to manage a persistent \n\
       IndexedDB database on the client device. By caching subjects, topics, and lessons \n\
       locally, the app ensures continuous learning and data persistence even during server outages \n\
       or power failures.',
      image: img,
    },
  ];

  //stacks
  import git from "../assets/github.png";
  import js from "../assets/js.png";
  import figma from "../assets/figma.png";

  const logoCarousel = [
    {
        id:1,
        logo: <img src={img} alt="react" className="w-10 h-10"/>
    },
    {
        id:2,
        logo: <img src={js} alt="javascript image" className="w-10 h-10"/>
    },
    {
        id:3,
        logo: <img src={figma} alt="figma image" className="w-10 h-10"/>
    }
  ];

  const swift = [...logoCarousel, ...logoCarousel, ...logoCarousel];


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
    
    <button 
        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        className="w-full md:w-auto bg-blue-800 p-4 px-8 rounded-full 
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

                {/**Web stacks used */}

                    <div className="mt-20 relative flex flex-col items-center justify-center overflow-hidden">
  <div className="relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
    <div className="flex w-max items-center gap-16 py-4 whitespace-nowrap will-change-transform motion-reduce:animate-none animate-[scroll_20s_linear_infinite] hover:[animation-play-state:paused]">
      {swift.map((logo) => (
        <div key={logo.id} className="shrink-0">
          {logo.logo}
        </div>
      ))}
      {swift.map((logo) => (
        <div key={`dup-${logo.id}`} className="shrink-0">
          {logo.logo}
        </div>
      ))}
      {swift.map((logo) => (
        <div key={`dup-${logo.id}`} className="shrink-0">
          {logo.logo}
        </div>
      ))}
    </div>
  </div>
</div>



                {/**About me and projects */}
                <section id="about" className="mt-30 px-6 lg:px-12">
                    <div className="max-w-6xl mx-auto text-left">
                        <div className="mb-20">
                            <h1 className="mb-4 text-3xl md:text-4xl font-bold">Projects</h1>
                            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 
                            leading-relaxed max-w-3xl">
                                {maker.about}
                            </p>
                        </div>
                        
                        <div id="projects" className="space-y-32">
                           
                            
                            <div className="space-y-40">
                                {projects.map((project, index) => (
                                    <div
                                        key={project.id}
                                        className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-20 group`}
                                    >
                                        {/* IMAGE SECTION */}
                                        <div className="w-full lg:w-3/5 overflow-hidden rounded-3xl bg-gray-100 dark:bg-gray-800 shadow-2xl transition-all duration-500 group-hover:shadow-blue-500/10">
                                            <div className="aspect-video relative overflow-hidden">
                                                <img
                                                    src={project.image}
                                                    alt={project.name}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                            </div>
                                        </div>

                                        {/* TEXT SECTION */}
                                        <div className="w-full lg:w-2/5 flex flex-col space-y-6">
                                            <div className="space-y-2">
                                                
                                                <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                                                    {project.name}
                                                </h3>
                                            </div>

                                            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                                                {project.description}
                                            </p>

                                            <div className="pt-4">
                                                <button className="flex items-center gap-2 font-bold text-blue-500 hover:text-blue-600 transition-colors group/btn">
                                                    View Project Details 
                                                    <span className="transform transition-transform group-hover/btn:translate-x-1">→</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/**Gallery */}

                <section>
                    <div>
                        <h1>Gallery</h1>
                    </div>
                </section>

               
            </main>
        </div>
    )
}