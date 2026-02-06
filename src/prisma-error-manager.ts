import { UnknownException } from "@caffeine/errors";
import { CoreException } from "@caffeine/errors/core";
import {
	ResourceNotFoundException,
	ConflictException,
	ForeignDependencyConstraintException,
} from "@caffeine/errors/infra";

export function prismaErrorManager(layerName: string, err: unknown) {
	const error: { code?: string; message: string } = err as Error;

	const possibleErrors: Record<string, () => never> = {
		P2025: () => {
			throw new ResourceNotFoundException(layerName, error.message);
		},
		P2002: () => {
			throw new ConflictException(layerName, error.message);
		},
		P2003: () => {
			throw new ForeignDependencyConstraintException(layerName, error.message);
		},
	};

	if (error.code && possibleErrors[error.code]) {
		return possibleErrors[error.code]?.();
	}

	if (error instanceof CoreException) throw error;

	throw new UnknownException();
}
