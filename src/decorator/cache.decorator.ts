import { Cache } from 'cache-manager';

interface CacheableClass {
  cacheManager: Cache;
}

export function Cacheable(ttl: number = 60) {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value as (
      ...args: any[]
    ) => Promise<unknown>;

    descriptor.value = async function (this: CacheableClass, ...args: any[]) {
      const cacheManager: Cache = this.cacheManager;
      const cacheKey = `${(target as object).constructor.name}.${propertyKey}:${JSON.stringify(args)}`;
      const cachedValue = await cacheManager.get<unknown>(cacheKey);

      if (cachedValue) {
        return cachedValue;
      }

      const result: unknown = await originalMethod.apply(this, args);
      await cacheManager.set(cacheKey, result, ttl);

      return result;
    };

    return descriptor;
  };
}
