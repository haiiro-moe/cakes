"use client";
import {
	createContext,
	useContext,
	useState,
	useCallback,
	useEffect,
	type ReactNode,
	type FC,
} from "react";

// Types
export type ToastType = "info" | "success" | "warning" | "error";

export interface ToastAction {
	label: string;
	onClick: () => void;
}

export interface ToastOptions {
	type?: ToastType;
	duration?: number;
	action?: ToastAction;
}

export interface Toast {
	id: number;
	message: string;
	type: ToastType;
	action?: ToastAction;
}

// Context type
interface ToastContextType {
	addToast: (toast: Omit<Toast, "id"> & { duration?: number }) => void;
	removeToast: (id: number) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

// Global dispatcher function holder
let addToastFunc: ToastContextType["addToast"] | null = null;

let toastCount = 0; // Global toast ID counter

// Exported global toast dispatcher
export function showToast(message: string, options: ToastOptions = {}): void {
	if (!addToastFunc) {
		console.error("ToastProvider is not initialized");
		return;
	}

	const { type = "info", duration = 5000, action } = options;
	addToastFunc({ message, type, duration, action });
}

// ToastProvider component
interface ToastProviderProps {
	children: ReactNode;
	position?:
		| "top-left"
		| "top-right"
		| "bottom-left"
		| "bottom-right"
		| "top-center"
		| "bottom-center";
}

export const ToastProvider: FC<ToastProviderProps> = ({
	children,
	position = "top-right",
}) => {
	const [toasts, setToasts] = useState<Toast[]>([]);

	const removeToast = useCallback((id: number) => {
		setToasts((prev) => prev.filter((toast) => toast.id !== id));
	}, []);

	const addToast = useCallback(
		({
			message,
			type,
			duration = 5000,
			action,
		}: Omit<Toast, "id"> & { duration?: number }) => {
			const id = ++toastCount;
			setToasts((prev) => [...prev, { id, message, type, action }]);
			if (duration > 0) {
				setTimeout(() => removeToast(id), duration);
			}
		},
		[removeToast]
	);

	useEffect(() => {
		addToastFunc = addToast;
		return () => {
			addToastFunc = null;
		};
	}, [addToast]);

	// DaisyUI position classes
	const [vertical, horizontal] = position.split("-");
	const vClass =
		vertical === "top"
			? "toast-top"
			: vertical === "bottom"
			? "toast-bottom"
			: "toast-middle";
	const hClass =
		horizontal === "left"
			? "toast-start"
			: horizontal === "center"
			? "toast-center"
			: "toast-end";

	const containerClass = `toast ${vClass} ${hClass} z-50 fixed`;

	return (
		<ToastContext.Provider value={{ addToast, removeToast }}>
			{children}
			<div className={containerClass}>
				{toasts.map(({ id, message, type, action }) => (
					<div key={id} className={`alert alert-${type} shadow-lg`}>
						<div className="flex justify-between items-center gap-2 w-full">
							<span>{message}</span>
							{action && (
								<button
									onClick={action.onClick}
									className="btn btn-sm btn-primary"
								>
									{action.label}
								</button>
							)}
							<button
								onClick={() => removeToast(id)}
								className="ml-auto btn btn-sm btn-ghost"
							>
								✕
							</button>
						</div>
					</div>
				))}
			</div>
		</ToastContext.Provider>
	);
};

// Optional hook
export const useToast = (): ToastContextType => {
	const context = useContext(ToastContext);
	if (!context) {
		throw new Error("useToast must be used within a ToastProvider");
	}
	return context;
};
