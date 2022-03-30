import { cloneDeep } from 'lodash'

/**
 * An abstract class for builders of type T.
 */

export default abstract class BuilderBase<T> {
	/** Private read only default value set in the constructor */
	private readonly defaultValue: T

	/** Protected result */
	protected __result: T

	/**
	 * The constructor of the `BuilderBase class.
	 *
	 * @param defaultValue the default value of type T
	 */
	constructor(defaultValue: T) {
		this.defaultValue = defaultValue
		this.reset()
	}

	/**
	 * Builds and returns the result
	 *
	 * @returns the resulting T
	 */
	public build(): T {
		const result = cloneDeep(this.__result)
		this.reset()
		return result
	}

	/**
	 * Protected function to reset the result to the default value
	 * provided in the constructor
	 */
	protected reset(): void {
		this.__result = cloneDeep(this.defaultValue)
	}
}
