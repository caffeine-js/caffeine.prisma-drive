import { prismaErrorManager } from "../prisma-error-manager";

export function SafePrisma(layerName?: string) {
	return (
		target: object,
		_propertyKey: string,
		descriptor: PropertyDescriptor,
	) => {
		const originalMethod = descriptor.value;

		descriptor.value = async function (...args: unknown[]) {
			try {
				return await originalMethod.apply(this, args);
			} catch (error) {
				const contextName = layerName || target.constructor.name;
				prismaErrorManager(contextName, error);
			}
		};

		return descriptor;
	};
}
