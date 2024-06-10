let pfFrameRef;

function handleFrameToggleDisplay() {
  const animationDelay = 200;
  if (!document.getElementById('pfProspectorFrame')) {
    pfFrameRef = document.createElement('iframe');
    pfFrameRef.id = 'pfProspectorFrame';
    pfFrameRef.style.height = '90%';
    pfFrameRef.style.width = '425px';
    pfFrameRef.style.position = 'fixed';
    pfFrameRef.style.zIndex = '2147483647';
    pfFrameRef.style.border = 'none';
    pfFrameRef.style.boxShadow = '0px 3px 8px rgba(0, 0, 0, 0.24)';
    pfFrameRef.style.transition = `opacity ${animationDelay}ms ease-out 0s`;
    pfFrameRef.style.opacity = '0';
    chrome.storage.local.get(['pf-prospector.windowPosition.right', 'pf-prospector.windowPosition.top'], (value) => {
      pfFrameRef.style.right = `${Number.parseInt(value['pf-prospector.windowPosition.right'], 10) || 1}px`;
      pfFrameRef.style.top = `${Number.parseInt(value['pf-prospector.windowPosition.top'], 10) || 1}px`;
    });
    pfFrameRef.src = chrome.runtime.getURL('index.html');
    document.body.appendChild(pfFrameRef);
    pfFrameRef.style.opacity = '1';
  } else {
    pfFrameRef = document.getElementById('pfProspectorFrame');
    pfFrameRef.style.opacity = '0';
    setTimeout(() => {
      pfFrameRef.remove();
    }, animationDelay);
  }
}

let deltaX;
let deltaY;

let rafHandle;

function userMovedRaf() {
  pfFrameRef.style.transform = `translate3d(${deltaX}px,${deltaY}px, 0px)`;
  rafHandle = null;
}

function handleFrameDragMove(offsetX, offsetY) {
  if (!rafHandle) {
    deltaX = offsetX;
    deltaY = offsetY;
    rafHandle = requestAnimationFrame(userMovedRaf);
  }
}

function handleFrameDragEnd() {
  if (rafHandle) {
    cancelAnimationFrame(rafHandle);
    rafHandle = null;
  }

  const windowRight = Number.parseInt(pfFrameRef.style.right, 10) - deltaX;
  const windowTop = Number.parseInt(pfFrameRef.style.top, 10) + deltaY;

  chrome.storage.local.set(
    {
      'pf-prospector.windowPosition.right': windowRight,
      'pf-prospector.windowPosition.top': windowTop,
    },
    () => {
      pfFrameRef.style.right = `${windowRight}px`;
      pfFrameRef.style.top = `${windowTop}px`;
      pfFrameRef.style.transform = 'translate3d(0px,0px,0px)';

      deltaX = null;
      deltaY = null;
    }
  );
}

chrome.runtime.onMessage.addListener((message) => {
  switch (message.action) {
    case 'PF_TOGGLE':
      handleFrameToggleDisplay();
      break;
    case 'PF_DRAG_MOVE':
      handleFrameDragMove(message.offsetX, message.offsetY);
      break;
    case 'PF_DRAG_END':
      handleFrameDragEnd();
      break;
    default:
      return false;
  }
  return true;
});
