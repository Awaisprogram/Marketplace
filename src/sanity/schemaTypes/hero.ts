export default {
  name: "hero",
  title: "Hero Section",
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
      name: "price",
      title: "Price",
      type: "number",
      
    },
    
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    
  ],
};
