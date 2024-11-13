module.exports = {
   apps: [
        {
            name: "product-management",
            script: "npm",
            args: "run-dev",
            env: {
                NODE_ENV : "development"
            }

        }
   ]
}