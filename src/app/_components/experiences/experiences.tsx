import { EntityExperience } from "../entity-experience/entity-experience";

export const Experiences: React.FC = () => {
  return (
    <section className="flex flex-col gap-6 p-6">
      <p className="text-sober text-sm leading-5">
        Here&apos;s a summary of my last work experiences.
      </p>
      <div className="flex flex-col gap-6">
        <EntityExperience
          entity="Smartrips"
          interval="2023 - Present"
          title="Fullstack Engineer"
        >
          <ul className="marker marker:text-border flex list-disc flex-col gap-3 pl-4">
            <li>
              Maintained critical services on a travel-tech company, including
              core Node.js REST APIs, microservices written in Go (Golang), and
              multiple front-end platforms using Typescript, React (i.e., HTML,
              CSS, Javascript), and Next.js under an AWS cloud infrastructure;
            </li>
            <li>
              Led a complete redesign of the main front-end PWA (Progressive Web
              Application) using React.js, Typescript, and Vite, taking the
              opportunity to add unit tests with Jest, improve observability
              with Sentry, and even design solutions for stakeholders with
              Figma;
            </li>
            <li>
              Optimized analytics processing by migrating gigabytes of
              transaction data using ETL (Extract, Transform, and Load)
              strategies, creating a high-performance generation solution using
              Node.js streams and optimized SQL queries, significantly reducing
              the core MySQL database&apos;s write/read ratio;
            </li>
          </ul>
        </EntityExperience>
        <EntityExperience
          entity="Dinheirow"
          interval="2023"
          title="Front-End Engineer"
        >
          <ul className="marker marker:text-border flex list-disc flex-col gap-3 pl-4">
            <li>
              Contributed to a fintech company&apos;s front-end platforms, being
              responsible for maintaining Vue and Next.js applications written
              in Typescript;
            </li>
            <li>
              Worked on the rewrite of the backoffice system from Vue to
              Next.js, creating unit tests with Jest for React.js components and
              hooks, experimenting with TDD (Test-Driven Development) as a
              culture, and documenting components with Storybook;
            </li>
            <li>
              Maintained the team&apos;s Bitbucket Pipeline to ensure a reliable
              front-end CI/CD workflow, following established Git Flow
              practices;
            </li>
            <li>
              Participated actively in the proposal of UI/UX design solutions
              for new backoffice features, using Figma to create prototypes for
              stakeholders;
            </li>
          </ul>
        </EntityExperience>
        <EntityExperience
          entity="Intelligix"
          interval="2022 - 2023"
          title="Fullstack Engineer"
        >
          <ul className="marker marker:text-border flex list-disc flex-col gap-3 pl-4">
            <li>
              Worked on a data protection and regulation company&apos;s MVP,
              focusing on the fast shipping of a core Express.js GraphQL
              back-end and of a main React.js platform, both written in
              Typescrip;
            </li>
            <li>
              Created an internal company library while developing the front-end
              with React.js, Typescript and Vite, designing Figma mockups before
              each task at hand;
            </li>
            <li>
              Had the opportunity to write the system&apos;s authentication and
              authorization flow from scratch using NestJS, managing multiple
              entity types with a multi-tenant MySQL database;
            </li>
            <li>
              Implemented a queue mechanism on the core API with RabbitMQ to
              dispatch email templates designed with React Email;
            </li>
          </ul>
        </EntityExperience>
        <EntityExperience
          entity="Em Suma"
          interval="2021 - 2022"
          title="Fullstack Engineer"
        >
          <ul className="marker:text-border flex list-disc flex-col gap-3 pl-4">
            <li>
              Created a linear regression statistics model using SciDAVis that
              evolved into a Go (Golang) microservice, laying the foundation for
              the birth of an educational platform;
            </li>
            <li>
              Designed the system&apos;s architecture from scratch on AWS, using
              services like CloudFront, Comprehend, ElasticCache, RDS with
              PostgreSQL, S3, SQS, Textract, and even Lambda to host an entire
              Clean Architecture Node with Express.js API - effectively,
              eliminating server costs;
            </li>
            <li>
              Built white-label systems for schools and applications for
              students and teachers using Typescript, React.js, and React Flow,
              creating an internal component library shared between projects
              while following front-end Clean Architecture and TDD (Test Driven
              Development) principles;
            </li>
            <li>
              Integrated extensively with third-party providers, such as
              MercadoPago (payment gateway), Resend (mailing), LanguageTool
              (grammar checker), and, later on, even OpenAI&apos;s ChatGPT for
              generating an AI summarized revision of essays;
            </li>
          </ul>
        </EntityExperience>
      </div>
    </section>
  );
};
