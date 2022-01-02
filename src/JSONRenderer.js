/* eslint-disable import/no-anonymous-default-export */
import ReactReconciler from "react-reconciler";
import { omit, noop, filter } from "lodash";

const rootHostContext = {};
const childHostContext = {};
let uid = 1;

export const root = {
  nodeName: "root",
  childNodes: [],
  $$uid: uid++,
};

window.__root = root;

const hostConfig = {
  getRootHostContext() {
    return rootHostContext;
  },
  getChildHostContext: () => {
    return childHostContext;
  },
  shouldSetTextContent() {},
  clearContainer(node) {
    if (node.childNodes.length > 0) {
      node.textContent = "";
    }
  },
  createInstance(type, props) {
    return {
      ...omit(props, ["children", "$$uid"]),
      nodeName: type.toLowerCase(),
      childNodes: [],
      $$uid: uid++,
    };
  },
  createTextInstance(text) {
    return {
      nodeName: "#text",
      textContent: text,
      $$uid: uid++,
    };
  },
  appendInitialChild(parent, child) {
    parent.childNodes.push(child);
  },
  appendChild(parent, child) {
    parent.childNodes.push(child);
  },
  appendChildToContainer(parent, child) {
    parent.childNodes.push(child);
  },
  finalizeInitialChildren(node, _, props) {
    Object.assign(node, omit(props, ["children", "$$uid"]));
    return false;
  },
  removeChildFromContainer(parent, child) {
    parent.childNodes = filter(parent.childNodes, (node) => {
      return node.$$uid !== child.$$uid;
    });
  },
  insertBefore(parent, child) {
    parent.childNodes.unshift(child);
  },
  removeChild(parent, child) {
    parent.childNodes = filter(parent.childNodes, (node) => {
      return node.$$uid !== child.$$uid;
    });
  },
  prepareUpdate() {
    return true;
  },
  commitUpdate(node, updatePayload, type, oldProps, newProps) {
    Object.assign(node, omit(newProps, ["children", "$$uid"]));
  },
  commitTextUpdate(node, oldText, newText) {
    node.textContent = newText;
  },
  resetAfterCommit: noop,
  commitMount: noop,
  prepareForCommit() {
    return null;
  },
  supportsMutation: true,
};
const ReactReconcilerInst = ReactReconciler(hostConfig);
export default {
  render: (reactElement, domElement, callback) => {
    // Create a root Container if it doesnt exist
    if (!domElement._rootContainer) {
      domElement._rootContainer = ReactReconcilerInst.createContainer(
        domElement,
        false
      );
    }

    // update the root Container
    return ReactReconcilerInst.updateContainer(
      reactElement,
      domElement._rootContainer,
      null,
      callback
    );
  },
};
