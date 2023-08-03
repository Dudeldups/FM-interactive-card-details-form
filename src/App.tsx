import CardContainer from "./components/CardContainer";
import Form from "./components/Form";

export default function App() {
  const handleSubmit = () => {
    return;
  };

  const handleChange = () => {
    return;
  };

  return (
    <main className="font-space-grotesk font-medium min-h-screen bg-clr-bg-main xl:grid xl:grid-cols-[calc(50%)_50%]">
      <CardContainer />
      <Form handleSubmit={handleSubmit} handleChange={handleChange} />
    </main>
  );
}
