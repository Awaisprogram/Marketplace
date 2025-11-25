export default {
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    {
      name: "firstName",
      title: "First Name",
      type: "string",
      description: "The first name of the customer.",
      validation: (Rule:any) => Rule.required(),
    },
    {
      name: "lastName",
      title: "Last Name",
      type: "string",
      description: "The last name of the customer.",
      validation: (Rule:any) => Rule.required(),
    },
    {
      name: "address",
      title: "Address",
      type: "string",
      description: "The shipping address of the customer.",
      validation: (Rule:any) => Rule.required(),
    },
    {
      name: "city",
      title: "City",
      type: "string",
      description: "The city of the shipping address.",
      validation: (Rule:any) => Rule.required(),
    },
    {
      name: "zipCode",
      title: "Zip Code",
      type: "string",
      description: "The zip code of the shipping address.",
      validation: (Rule:any) => Rule.required(),
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
      description: "The phone number of the customer.",
      validation: (Rule:any) => Rule.required(),
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      description: "The email address of the customer.",
      validation: (Rule:any) => Rule.required().email(),
    },
    {
      name: "cartItems",
      title: "Cart Items",
      type: "array",
      of: [
        {
          type: "object",
          name: "cartItem",
          title: "Cart Item",
          fields: [
            {
              name: "product",
              title: "Product",
              type: "reference",
              to: [{ type: "product" }],
              validation: (Rule:any) => Rule.required(),
            },
            {
              name: "quantity",
              title: "Quantity",
              type: "number",
              validation: (Rule:any) => Rule.required().min(1),
            },
          ],
        },
      ],
    },
    {
      name: "total",
      title: "Total",
      type: "number",
    },
    {
      name: "status",
      title: "Order Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Success", value: "success" },
          { title: "Dispatch", value: "dispatch" },
        ],
        layout: "radio",
      },
      initialValue: "pending",
    },
  ],
};
