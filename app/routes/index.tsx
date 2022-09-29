import type {
  MetaFunction,
  LinksFunction,
  LoaderFunction,
} from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';

export let meta: MetaFunction = () => {
  return {
    title: 'remix-worker-template',
    description: 'All-in-one remix starter template for Cloudflare Workers',
  };
};

export let links: LinksFunction = () => {
  return [];
};

export let loader: LoaderFunction = async ({ request , context}) => {
  return {
    env: context?.env,
    title: 'remix-worker-template',
  };
};

export default function Index() {
  let { title, env } = useLoaderData();

  return (
    <div>
      <div className="sm:px-10 p-5">
        <h2 className="mt-6 text-xl">{title}</h2>
        <p className="py-2">
          All-in-one remix starter template for Cloudflare Workers
        </p>
        <p className="py-2">
          ENV vars passed via Remix context: {Object.entries(env).forEach(([key, value]) => <div>{key}: {key.indexOf('TOKEN') > -1 ? '***REDACTED***' : value}</div>)}
        </p>

        <a
          className="inline-block border hover:border-black px-4 py-2 mt-2"
          href="https://github.com/edmundhung/remix-worker-template"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Repository
        </a>
      </div>
    </div>
  );
}
