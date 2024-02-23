import { NxDefaultTasksRunnerOptions } from "./nx";

export type CustomRunnerOptions<T extends Object = Object> = T &
  NxDefaultTasksRunnerOptions & {
    /**
     * Sets task runner name for logging.
     */
    name?: string;
    /**
     * Sets verbose error logging for `nx-remotecache-custom`.
     */
    verbose?: boolean;
    /**
     * Hide success and info logs. Only display warning and error logs.
     */
    silent?: boolean;
    /**
     * Enables / disables reading `.env` files into the `proces.env`.
     *
     * @default true
     */
    dotenv?: boolean;
    /**
     * Path to folder containing `.env` files. Optional.
     */
    dotenvPath?: string;
    /**
     * Enable / disable reading from the remote cache.
     *
     * @default true
     */
    read?: boolean;
    /**
     * Enable / disable writing to the remote cache.
     *
     * @default true
     */
    write?: boolean;
  };
