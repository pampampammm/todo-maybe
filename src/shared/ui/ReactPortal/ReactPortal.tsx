import { createPortal } from 'react-dom';
import React, { ReactNode } from 'react';

interface PortalProps {
    children: ReactNode,
    element?: HTMLElement
}

const ReactPortal = ({
    children,
    element = document.body,
} : PortalProps) => createPortal(children, element);

export default ReactPortal;
