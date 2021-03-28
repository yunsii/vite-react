import * as React from 'react';
import Loadable from 'react-loadable';

interface LoadableOptions {
  loading?: Function;
  loader?: Function;
}

export default function dynamic(options: any) {
  const loadableFn = Loadable;
  let loadableOptions: LoadableOptions = {
    loading: ({ error, isLoading }: { error: Error; isLoading: boolean }) => {
      if (process.env.NODE_ENV === 'development') {
        if (isLoading) {
          return <p>loading...</p>;
        }
        if (error) {
          return (
            <p>
              {error.message}
              <br />
              {error.stack}
            </p>
          );
        }
      }
      return <p>loading...</p>;
    },
  };

  // Support for direct import(),
  // eg: dynamic(() => import('../hello-world'))
  if (typeof options === 'function') {
    loadableOptions.loader = options;
    // Support for having first argument being options,
    // eg: dynamic({loader: import('../hello-world')})
  } else if (typeof options === 'object') {
    loadableOptions = { ...loadableOptions, ...options };
  } else {
    throw new Error(`Unexpect arguments ${options}`);
  }

  // Support for passing options,
  // eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})
  // loadableOptions = { ...loadableOptions, ...options };

  return loadableFn(loadableOptions as any);
}
