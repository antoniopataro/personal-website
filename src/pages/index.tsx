import Image from "next/image";
import Link from "next/link";

import Tooltip from "@components/Tooltip";

import Layout from "@layouts/app.layout";

import { getItem } from "@services/storage";

import ReactFlow, {
  Background,
  Handle,
  NodeProps,
  Position,
  useNodesState,
  useEdgesState,
} from "reactflow";

import "reactflow/dist/style.css";

import technologies from "@utils/technologies.json";

const initialNodes = technologies.map((technology, index) => {
  const res = {
    ariaLabel: technology.name,
    data: {
      ...technology,
      label: `${index}`,
    },
    id: `${index}`,
    position: {
      x: Math.random() * 1020,
      y: Math.random() * 1020,
    },
    type: "technology",
  };

  return res;
});

const initialEdges = technologies
  .filter((technology) => technology.edges)
  .flatMap((technology, index) => {
    return technology.edges.map((edge) => {
      const node = initialNodes.find((node) => node.data.slug === edge);

      return {
        animated: true,
        id: `e${index}-${node?.id}`,
        source: `${index}`,
        target: `${node?.id}`,
        style:
          getItem("theme") === "dark" ? { opacity: 0.1 } : { opacity: 0.5 },
      };
    });
  });

const NODE_TYPES = {
  technology: (props: NodeProps) => {
    return (
      <>
        <Handle
          style={{ opacity: 0, pointerEvents: "none", cursor: "default" }}
          type="target"
          position={Position.Top}
        />
        <Tooltip message={props.data.name} position="top">
          <Link
            href={props.data?.url ?? ""}
            rel="noopener noreferrer"
            target="_blank"
            title={props.data.name}
            className="cursor-default"
          >
            <Image
              alt={props.data.name}
              height={36}
              src={props.data.img}
              width={36}
              className="h-9 w-9"
            />
          </Link>
        </Tooltip>
        <Handle
          style={{ opacity: 0, pointerEvents: "none", cursor: "default" }}
          type="source"
          position={Position.Bottom}
          id={props.id}
        />
      </>
    );
  },
};

const proOptions = { hideAttribution: true };

function Home() {
  const [nodes, _, onNodesChange] = useNodesState(initialNodes);
  const [edges] = useEdgesState(initialEdges);

  return (
    <div className="relative w-full min-h-screen px-8 py-16 sm:p-16 md:p-24 lg:p-32">
      <header className="flex w-full items-center justify-between gap-8">
        <div className="flex w-full sm:w-fit items-center justify-between sm:justify-start gap-8">
          <div className="flex items-center gap-4">
            <Image
              src="/profile-pic.png"
              alt="Antônio Pataro"
              width={48}
              height={48}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <span className="flex items-center gap-1 dark:text-[#DADADA] text-sm">
                Antônio Pataro
                <Image
                  src="/brazil-flag.svg"
                  alt=""
                  width={14}
                  height={15}
                  className="w-auto h-auto pointer-events-none"
                />
              </span>
              <span className="text-xs dark:text-[#DADADA] dark:text-opacity-50">
                Software Developer
              </span>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-[9px] h-6 px-[9px] ring-1 ring-emerald-500 ring-opacity-20 rounded bg-gradient-to-r from-emerald-400/10 to-emerald-600/10">
            <span className="w-[3px] h-[3px] rounded-full bg-emerald-500" />
            <span className="hidden lg:block text-xs bg-clip-text bg-gradient-to-r text-transparent from-emerald-400 to-emerald-600">
              Available for new projects
            </span>
            <span className="block lg:hidden text-xs text-emerald-500">
              Available
            </span>
          </div>
        </div>
      </header>
      <main className="mt-16 w-full flex flex-col">
        <div className="flex flex-col max-w-[510px] gap-4 pb-16 text-sm text-[#222222] dark:text-[#DADADA]">
          <p>
            Hello! <span className="inline-block animate-wave">👋</span>
          </p>
          <p>
            I&apos;m a passionate developer from{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600">
              Brazil
            </span>{" "}
            who&apos;s very experienced in building Typescript/Go Fullstack
            (front-end-heavy) modern applications with preciousness to detail.
          </p>
          <p>I am adaptable, easygoing and always open to new challenges.</p>
        </div>
        <div className="group relative h-[510px] w-full rounded-lg outline-none ring-1 dark:ring-white/10 ring-black/10">
          <ReactFlow
            edges={edges}
            fitView
            nodes={nodes}
            nodeTypes={NODE_TYPES}
            onNodesChange={onNodesChange}
            proOptions={proOptions}
            style={{ width: "100%", height: "100%" }}
          >
            <Background gap={12} size={1} style={{ opacity: 0.25 }} />
          </ReactFlow>
        </div>
      </main>
    </div>
  );
}

Home.getLayout = function getLayout(home: React.ReactElement) {
  return <Layout>{home}</Layout>;
};

export default Home;
