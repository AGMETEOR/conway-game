#!/usr/bin/env bash
sed "s/buildTag/$1/g" k8s/deployment-green.yaml > k8s/dep-green.yaml