type Props = {
  trace: string[];
};

export default function AgentTrace({
  trace,
}: Props) {

  return (

    <div className="bg-white rounded-xl shadow-lg p-4">

      <h3 className="font-bold">
        🤖 AI Pipeline
      </h3>

      {trace.map((agent) => (

        <div key={agent}>
          ✓ {agent}
        </div>

      ))}

    </div>

  );
}