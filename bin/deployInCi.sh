if [ "$CIRCLECI" == "true" ] && [ "$CIRCLE_BRANCH" == "master" ] ; then
    npm run deployToDev
fi