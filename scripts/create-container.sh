docker run --name celebs-db --mount type=bind,source="$(pwd)",dst="/code" -d mongo
