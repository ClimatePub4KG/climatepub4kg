import React from "react";
import "./App.css";

const App: React.FC = () => {
  return (
    <div>
      {/* <img src="images/header.jpg" className="header-image" alt="Header Image" /> */}
      {/* Header Section */}
      <header className="header">
        <img src="/climatepub4kg/docs/assets/img/logo.png" className="logo" alt="Logo" />
        <h1>ClimatePub4KG</h1>
        <p>Knowledge Graph to Support Evaluation and Development of Climate Models</p>
      </header>

      {/* Body Section */}
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
          <img src="/climatepub4kg/docs/assets/img/GCMD+.png" alt="GCMD+ Taxonomy" className="section-image" />
          <hr />
        </section>

        {/* Method Overview Section */}
        <section className="section">
          <h2>Method Overview</h2>
          <p>
            This project involves constructing a comprehensive Knowledge Graph by leveraging existing 
            taxonomies, advanced language models, and post-processing techniques to organize climate science 
            data and relationships. It begins with aggregating existing taxanomies mentioned in GCMD+.
            Climate publications are then analyzed to create structured prompts that guide a large language 
            model to extract key entities (e.g., precipitation, regions) and their relationships 
            (e.g., "precipitation measured at North America"). Post-processing methods are applied to minimize 
            errors or hallucinations introduced by the model, ensuring accuracy and relevance. The extracted 
            and refined entities and relationships are integrated into a Knowledge Graph, providing a 
            structured and interconnected representation of climate science data. This Knowledge Graph enables 
            more efficient discovery, categorization, and use of climate modeling resources, fostering 
            collaboration and innovation in climate research.
          </p>
          <img src="/climatepub4kg/docs/assets/img/overview.png" alt="Method Overview" className="section-image" />
          <hr />
        </section>

        {/* Team Section */}
        <section className="team-section">
          <h2>Team</h2>
          
          {/* Grid of Team Members */}
          <div className="team-image">
          <img src="/climatepub4kg/docs/assets/img/Slide1.jpg" alt="Team Member 1" />
          </div>
          <hr />
        </section>

      </main>

      {/* Footer Section */}
      <footer className="footer">
        <p>ClimatePub4KG</p>
      </footer>
    </div>
  );
};

export default App;
