import React from "react";
import "./App.css";

const App: React.FC = () => {
  return (
      <div>
        {/* Header Section */}
        <header className="header">
          <img src="/climatepub4kg/images/logo.png" className="logo" alt="Logo" />
          <div className="nav-container">
            <ul className="nav-links">
              <li><a href="#demo">Demo</a></li>
            </ul>
          </div>
          <h1>ClimatePub4KG</h1>
          <p>Knowledge Graph to Support Evaluation and Development of Climate Models</p>
        </header>

        <main className="body">
        {/* Introduction Section */}
        <section className="section">
          <h2>Introduction</h2>
          <p>
            The goal of this project is to create a comprehensive multimodal knowledge graph that highlights 
            the most critical aspects of climate modeling, including data, climate models, and tasks. 
            This knowledge graph encompasses both classical fluid dynamics models and AI-based models. 
            By leveraging existing datasets and models, it ensures that past research investments are reused 
            and fully integrated into future climate modeling efforts.

            Automated methods developed in this project will infer relationships between 
            papers, data, and tasks, enabling the suggestion of relevant artifacts for new
            research endeavors. This will significantly reduce the time spent searching for 
            these resources. By providing a structured representation of climate models, 
            the project will make them more accessible and enhance their usability.

            Additionally, the project contributes to the field of information retrieval with a
            focus on named entity recognition and the creation of an expansive knowledge graph. 
            Novel deep learning techniques will be developed for automatic entity and relation 
            extraction, entity linking, and knowledge graph construction. This effort aims to 
            interconnect climate modeling elements while fostering innovation, collaboration, 
            and efficient reuse of research artifacts.
          </p>
          <hr />
        </section>

        {/* GCMD+ Taxonomy Section */}
        <section className="section">
          <h2>GCMD+ Taxonomy</h2>
          <p>
            GCMD+ taxonomy is an extension of the most recent version of the Global Change Master Directory 
            (GCMD) from NASA. To enhance the taxonomy's breadth and depth, we incorporated additional resources, 
            specifically the CMIP6 Controlled Vocabularies (CMIP6CV), observations for the Model Intercomparison 
            Project (obs4MIPs), and the vocabulary listing from the CMIP Publication Hub, all accessed as of 
            May 2024.

            Each of the entities in the GCMD+ taxonomy was assigned tags based on their hierarchical paths, 
            focusing specifically on main and sub-categories identified as non-leaf nodes. The GCMD+ taxonomy 
            provides a comprehensive set of terms that are essential for categorizing and accessing climate 
            science literature, particularly for climate modeling research.
          </p>
          <img src="/climatepub4kg/images/GCMD+.png" alt="GCMD+ Taxonomy" className="section-image" />
          <hr />
        </section>

        {/* Method Overview Section */}
        <section className="section">
          <h2>Method Overview</h2>
          <p>
            This project involves constructing a comprehensive Knowledge Graph by leveraging existing 
            taxonomies, advanced language models, and post-processing techniques to organize climate science 
            data and relationships. It begins with aggregating existing taxonomies mentioned in GCMD+.
            Climate publications are then analyzed to create structured prompts that guide a large language 
            model to extract key entities (e.g., precipitation, regions) and their relationships 
            (e.g., "precipitation measured at North America"). Post-processing methods are applied to minimize 
            errors or hallucinations introduced by the model, ensuring accuracy and relevance. The extracted 
            and refined entities and relationships are integrated into a Knowledge Graph, providing a 
            structured and interconnected representation of climate science data. This Knowledge Graph enables 
            more efficient discovery, categorization, and use of climate modeling resources, fostering 
            collaboration and innovation in climate research.
          </p>
          <img src="/climatepub4kg/images/overview.png" alt="Method Overview" className="section-image" />
          <hr />
        </section>

        {/* Team Section */}
        <section className="team-section">
          <h2>Team </h2>
          <p>Team Email: <a href="mailto:climatepub4kg@gmail.com">climatepub4kg@gmail.com</a></p>
          
          <div className="team-grid">
          {/* Top row (4 people) */}
          <div className="team-member">
            <img src="/climatepub4kg/public/images/Dragut.jpg" alt="Team Member 1" />
            <div className="team-info">
              <h3>Eduard Dragut<br></br>
                PI
              </h3>
              {/* <p>john.doe@example.com</p> */}
            </div>
          </div>
          <div className="team-member">
            <img src="/climatepub4kg/public/images/latecki.jpg" alt="Team Member 2" />
            <div className="team-info">
              <h3>Longin Jan Latecki <br></br>
                Co-PI
              </h3>
              {/* <p>jane.smith@example.com</p> */}
            </div>
          </div>
          <div className="team-member">
            <img src="/climatepub4kg/public/images/Mustapha.jpg" alt="Team Member 3" />
            <div className="team-info">
              <h3>Adamu Mustapha <br></br>
                Postdoctoral Fellow
              </h3>
              {/* <p>michael.brown@example.com</p> */}
            </div>
          </div>
          <div className="team-member">
            <img src="/climatepub4kg/public/images/Pan.jpg" alt="Team Member 4" />
            <div className="team-info">
              <h3>Jo Pan <br></br>
                RA
              </h3>
              <p><a href="mailto:huitong.pan@temple.edu">huitong.pan@temple.edu</a></p>
            </div>
          </div>
          {/* Bottom row (3 people) */}
          <div className="team-member">
            <img src="/climatepub4kg/public/images/Zhang.jpg" alt="Team Member 5" />
            <div className="team-info">
              <h3>Qi Zhang <br></br>
                RA
              </h3>
              {/* <p>chris.green@example.com</p> */}
            </div>
          </div>
          <div className="team-member">
            <img src="/climatepub4kg/public/images/Reizas.jpg" alt="Team Member 6" />
            <div className="team-info">
              <h3>Eric Reizas<br></br>
                REU
              </h3>
              {/* <p>samantha.blue@example.com</p> */}
            </div>
          </div>
          <div className="team-member">
            <img src="/climatepub4kg/public/images/Hageman.jpg" alt="Team Member 7" />
            <div className="team-info">
              <h3>Caleb Hageman<br></br>
                REU
              </h3>
              {/* <p>daniel.gray@example.com</p> */}
            </div>
          </div>
        </div>

          <hr />
        </section>
        </main>

        {/* Footer Section */}
        <footer className="footer">
          <p>ClimatePub4KG</p>
          <p>
            This project is supported by the NSF under the grant{' '}
            <a href="https://nam10.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.nsf.gov%2Fawardsearch%2FshowAward%3FAWD_ID%3D2333789%26HistoricalAwards%3Dfalse&data=05%7C02%7Ccaleb.hageman%40temple.edu%7Ca440add2049c4257e94f08dd26bb629e%7C716e81efb52244738e3110bd02ccf6e5%7C0%7C0%7C638709308437444392%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=2mAxObLe4uZvMxd0MNsUD4x54NqSXIinPt6a%2Bd%2FoBRQ%3D&reserved=0" target="_blank" rel="noopener noreferrer">
              ITE-2333789
            </a>{' '}
            in the Proto-OKN program.
          </p>
        </footer>

      </div>
  );
};

export default App;
