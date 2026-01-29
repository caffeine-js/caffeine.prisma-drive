import { UnknownException } from "@caffeine/errors";
import {
	ResourceNotFoundException,
	ConflictException,
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
	};

	if (error.code && possibleErrors[error.code]) {
		return possibleErrors[error.code]?.();
	}

	throw new UnknownException();
}
