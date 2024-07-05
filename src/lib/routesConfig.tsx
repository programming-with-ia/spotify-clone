export const RoutesConfig = {
    home: "/",
}

export function joinPaths(...paths:string[]) {
    const normalizedPaths = paths.slice(1).map(path => path.replace(/^\/+|\/+$/g, ''));
    return [paths[0].replace(/\/+$/, ''), ...normalizedPaths].join('/');
}