cd docs
helm package ../hosting/kubernetes/budibase
helm repo index . --url https://turnbros.github.io/budibase
