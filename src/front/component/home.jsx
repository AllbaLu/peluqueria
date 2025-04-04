import pelu from "../img/peluq.png";
import '../../styles/home.css';

export const Home = () => {
  return (
    <section id="home">
      <div className="home h-100" style={{ mixBlendMode: "difference" }}>
        <div
          className="img-home"
          style={{
            backgroundImage: `url(${pelu})`,
          }}
        >
          <h1
            className="display-3 text-white"
            style={{ mixBlendMode: "color-burn" }}
          >
            <em>
              <strong>Realza tu Belleza</strong>
            </em>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Home;
