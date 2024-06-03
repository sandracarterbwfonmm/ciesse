class ResourceHolder<T> {
    private resources: T;

    constructor(resources: T) {
        if (!resources) {
            throw new Error('Resources cannot be null or undefined.');
        }
        this.resources = resources;
    }

    // Additional methods can be added here to utilize the resources
}
