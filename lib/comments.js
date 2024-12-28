const commentsData = [
    {
      id: 100,
      comment: "This is such a helpful post! Thanks for sharing.",
      subComments: [
        {
          id: 1,
          comment: "Glad you found it useful! Let me know if you have questions.",
          subComments: [],
        },
        {
          id: 2,
          comment: "Agreed, this is super informative. Appreciate it!",
          subComments: [],
        },
        {
          id: 3,
          comment: "Could you elaborate on the third point?",
          subComments: [
            {
              id: 4,
              comment: "Sure! The third point focuses on real-time data updates.",
              subComments: [
                {
                  id: 5,
                  comment: "Got it. That makes a lot of sense now. Thanks!",
                  subComments: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 6,
      comment: "Does this method work for larger datasets as well?",
      subComments: [
        {
          id: 7,
          comment: "Yes, but you might need optimizations for performance.",
          subComments: [],
        },
        {
          id: 8,
          comment: "I’d recommend implementing pagination for large datasets.",
          subComments: [
            {
              id: 9,
              comment: "Pagination sounds like a good idea. I'll try that!",
              subComments: [],
            },
          ],
        },
      ],
    },
    {
      id: 10,
      comment: "Thanks for putting this together. It’s been a great help!",
      subComments: [],
    },
  ];
  
  export default commentsData;
  