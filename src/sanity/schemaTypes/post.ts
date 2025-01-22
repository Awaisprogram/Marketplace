export default {
  name: "post",
  title: "post Section",
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
      name: "title",
      title: "Title",
      type: "string",
     
    },
    
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "date",
      title: "Date",
      type: "string",
      
    },
    {
      name: "comments",
      title: "Comments",
      type: "number",
      
    },
    
  ],
};
