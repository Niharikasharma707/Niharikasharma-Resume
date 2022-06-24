import React from "react";
import "./Projects.css";
import ProjectBox from "./ProjectBox/ProjectBox";

export default function Projects() {
  const projectData = [
    {
      image:   "https://th.bing.com/th/id/OIP.81ll-dWaS8V-1EAdL3OZbwHaJ3?pid=ImgDet&rs=1",
      title: "Ecomm Website",
      sentences: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh lorem, consequat vel pellentesque quis, varius vitae odio.",
        "Vivamus pretium libero tortor, eget iaculis ex fermentum nec. Nulla leo ligula, aliquet ac suscipit ut, mollis vitae tellus. Mauris iaculis neque",
        "Aliquam eget arcu dictum, vulputate elit ac, mollis eros. Maecenas eget iaculis velit. Duis nunc urna, semper sed nunc sed, placerat pellentesque leo. ",
        "Aliquam eget arcu dictum, vulputate elit ac, mollis eros. Maecenas eget iaculis velit. Duis nunc urna, semper sed nunc sed, placerat pellentesque leo. ",
      ],
      link: "https://www.google.co.in/",
    },
    {
      image:  "https://th.bing.com/th/id/OIP.81ll-dWaS8V-1EAdL3OZbwHaJ3?pid=ImgDet&rs=1",
      title: "Ecomm Website",
      sentences: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh lorem, consequat vel pellentesque quis, varius vitae odio.",
        "Vivamus pretium libero tortor, eget iaculis ex fermentum nec. Nulla leo ligula, aliquet ac suscipit ut, mollis vitae tellus. Mauris iaculis neque",
        "Aliquam eget arcu dictum, vulputate elit ac, mollis eros. Maecenas eget iaculis velit. Duis nunc urna, semper sed nunc sed, placerat pellentesque leo. ",
        "Aliquam eget arcu dictum, vulputate elit ac, mollis eros. Maecenas eget iaculis velit. Duis nunc urna, semper sed nunc sed, placerat pellentesque leo. ",
      ],
      link: "https://www.google.co.in/",
    },
    {
      image: "https://th.bing.com/th/id/OIP.81ll-dWaS8V-1EAdL3OZbwHaJ3?pid=ImgDet&rs=1",
      title: "Ecomm Website",
      sentences: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh lorem, consequat vel pellentesque quis, varius vitae odio.",
        "Vivamus pretium libero tortor, eget iaculis ex fermentum nec. Nulla leo ligula, aliquet ac suscipit ut, mollis vitae tellus. Mauris iaculis neque",
        "Aliquam eget arcu dictum, vulputate elit ac, mollis eros. Maecenas eget iaculis velit. Duis nunc urna, semper sed nunc sed, placerat pellentesque leo. ",
        "Aliquam eget arcu dictum, vulputate elit ac, mollis eros. Maecenas eget iaculis velit. Duis nunc urna, semper sed nunc sed, placerat pellentesque leo. ",
      ],
      link: "https://www.google.co.in/",
    },
  ];

  return (
    <div>
      <p className="projects_title">Projects</p>
      <div className="projects_box_container">
        {projectData.map((value, index) => (
          <ProjectBox
            title={value.title}
            image={value.image}
            sentences={value.sentences}
            link={value.link}
          />
        ))}
      </div>
    </div>
  );
}
 
