import "./App.css";

function App() {
  const checkBoxesData = [
    {
      id: 1,
      name: "CEO",
      children: [
        {
          id: 2,
          name: "CTO",
          children: [
            {
              id: 5,
              name: "Dev Team Lead",
              children: [
                { id: 9, name: "Frontend Dev", children: [] },
                { id: 10, name: "Backend Dev", children: [] }
              ]
            },
            {
              id: 6,
              name: "QA Lead",
              children: [
                { id: 11, name: "QA Tester", children: [] }
              ]
            }
          ]
        },
        {
          id: 3,
          name: "CFO",
          children: [
            {
              id: 7,
              name: "Accountant",
              children: []
            }
          ]
        },
        {
          id: 4,
          name: "COO",
          children: [
            {
              id: 8,
              name: "Operations Manager",
              children: [
                { id: 12, name: "Logistics", children: [] },
                { id: 13, name: "Customer Support", children: [] }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 14,
      name: "Founder",
      children: [
        {
          id: 15,
          name: "Advisor",
          children: []
        },
        {
          id: 16,
          name: "Strategy Lead",
          children: [
            {
              id: 17,
              name: "Market Analyst",
              children: []
            }
          ]
        }
      ]
    },
    {
      id: 18,
      name: "Board Member",
      children: []
    }
  ];
  

  const CheckBoxes = ({ data }) => {
    return (
      <div>
        {data.map((node) => (
          <div key={node.id} className="parent">
            <input type="checkbox"/>
            <span>{node.name}</span>
            {node.children && <CheckBoxes data={node.children} />}
          </div>
        ))}
      </div>
    );
  };
  return (
    <>
      <CheckBoxes data={checkBoxesData} />
    </>
  );
}

export default App;
