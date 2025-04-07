import { useState } from "react";
import "./App.css";

function App() {
  const [checked, setChecked] = useState({});
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
                { id: 10, name: "Backend Dev", children: [] },
              ],
            },
            {
              id: 6,
              name: "QA Lead",
              children: [{ id: 11, name: "QA Tester", children: [] }],
            },
          ],
        },
        {
          id: 3,
          name: "CFO",
          children: [
            {
              id: 7,
              name: "Accountant",
              children: [],
            },
          ],
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
                { id: 13, name: "Customer Support", children: [] },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 14,
      name: "Founder",
      children: [
        {
          id: 15,
          name: "Advisor",
          children: [],
        },
        {
          id: 16,
          name: "Strategy Lead",
          children: [
            {
              id: 17,
              name: "Market Analyst",
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: 18,
      name: "Board Member",
      children: [],
    },
  ];

  const CheckBoxes = ({ data, checked, setChecked }) => {
    const handleChange = (isChecked, node) => {
      setChecked((prev) => {
        const newState = { ...prev };

        // 1. Toggle the current node
        newState[node.id] = isChecked;

        // 2. Update children recursively
        const updateChildren = (currentNode) => {
          currentNode.children?.forEach((child) => {
            newState[child.id] = isChecked;
            if (child.children?.length) {
              updateChildren(child);
            }
          });
        };
        updateChildren(node);

        // 3. Recursively update parents
        const verifyChecked = (currentNode) => {
          if (!currentNode.children || currentNode.children.length === 0) {
            return newState[currentNode.id] || false;
          }

          const allChildrenChecked = currentNode.children.every((child) =>
            verifyChecked(child)
          );

          newState[currentNode.id] = allChildrenChecked;
          return allChildrenChecked;
        };

        checkBoxesData.forEach((topNode) => verifyChecked(topNode));

        return newState;
      });
    };
    console.log(checked);

    return (
      <div>
        {data.map((node) => (
          <div key={node.id} className="parent">
            <input
              type="checkbox"
              checked={checked[node.id] || false}
              onChange={(e) => handleChange(e.target.checked, node)}
            />
            <span>{node.name}</span>
            {node.children && (
              <CheckBoxes
                data={node.children}
                checked={checked}
                setChecked={setChecked}
              />
            )}
          </div>
        ))}
      </div>
    );
  };
  return (
    <>
      <CheckBoxes
        data={checkBoxesData}
        checked={checked}
        setChecked={setChecked}
      />
    </>
  );
}

export default App;
