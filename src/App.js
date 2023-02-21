import './App.css';
import './hojas-de-estilo/estilo-testimonio.css'
import { Testimonio } from './componentes/Testimonio';

function App() {
  let users = [
    {
      nombre: 'Emma Bostian',
      pais: 'Suecia',
      cargo: 'Ingeniera de Software',
      empresa: 'Spotify',
      testimonio: 'Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en <b>freeCodeCamp me dio las habilidades</b> y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.',
      imagen: 'emma'
    },
    {
      nombre: 'Sarha Chima',
      pais: 'Nigeria',
      cargo: 'Ingeniera de Software',
      empresa: 'ChatDesk',
      testimonio: '<b>freeCodeCamp fue la puerta de entrada</b> a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.',
      imagen: 'sarah'
    },
    {
      nombre: 'Shawn Wang',
      pais: 'Singapur',
      cargo: 'Ingeniero de Software',
      empresa: 'Amazon',
      testimonio: 'Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. <b>freeCodeCamp cambió mi vida</b>.',
      imagen: 'shawn'
    }
  ]
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre el curso de programación.</h1>

        {users.map((user, index) => {
          return (
            <Testimonio
              key={index}
              nombre={user.nombre}
              pais={user.pais}
              imagen={user.imagen}
              cargo={user.cargo}
              empresa={user.empresa}
              testimonio={user.testimonio}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
