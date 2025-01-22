export default {
  name: "about",
  title: "about Section",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Background Image",
      type: "image",
      options: {
        hotspot: true, 
      },
    },
    {
      name: "subtext",
      title: "Subtext",
      type: "string",
     
    },
    {
      name: "heading",
      title: "Heading",
      type: "string",
      
    },
    
    
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "bottom",
      title: "Bottom",
      type: "string",
      
    },
    
  ],
};
