import {BrowserRouter as Router, Link} from 'react-router-dom';
import './Services.css';
const Services = () => {
return (
	 <div className="grid services">
  <article>
    <img src="https://www.quackit.com/pix/samples/23m.jpg" alt="Sample photo"/>
    <div className="text">
      <h3>Seamlessly visualize quality</h3>
      <p>Collaboratively administrate empowered markets via plug-and-play networks.</p>
      <Link to="/About">
      <button>Here's why</button>
      </Link>
    </div>
  </article>
  <article>
    <img src="https://www.quackit.com/pix/samples/24m.jpg" alt="Sample photo"/>
    <div className="text">
      <h3>Completely Synergize</h3>
      <p>Dramatically engage seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing.</p>
      <Link to="/About">
      <button>Here's how</button>
      </Link>
    </div>
  </article>
  <article>
    <img src="https://www.quackit.com/pix/samples/22l.jpg" alt="Sample photo"/>
    <div className="text">
      <h3>Dynamically Procrastinate</h3>
      <p>Completely synergize resource taxing relationships via premier niche markets.</p>
      <Link to="/About">
        <button>Read more</button>
        </Link>
    </div>
  </article>
  <article>
    <img src="https://www.quackit.com/pix/samples/15l.jpg" alt="Sample photo"/>
    <div className="text">
      <h3>Best in class</h3>
      <p>Imagine jumping into that boat, and just letting it sail wherever the wind takes you...</p>
      <Link to="/About">
      <button>Just do it...</button>
      </Link>
    </div>
  </article>
  <article>
    <img src="https://www.quackit.com/pix/samples/25m.jpg" alt="Sample photo"/>
    <div className="text">
      <h3>Dynamically innovate supply chains</h3>
      <p>Holisticly predominate extensible testing procedures for reliable supply chains.</p>
      <Link to="/About">
      <button>Here's why</button>
      </Link>
    </div>
  </article>
	</div>
    
);
};

export default Services;
