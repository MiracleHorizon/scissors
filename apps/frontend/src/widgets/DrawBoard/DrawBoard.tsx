import { useLayoutEffect, useRef, useEffect, useCallback } from 'react'

import { DRAW_MODE, useDrawStore } from '@stores/draw'
import { scaleCanvas } from './utility'
import { useOutputStore } from '@stores/output'
import styles from './DragBoard.module.css'

export const DrawBoard = () => {
  const parentRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const contextRef = useRef<CanvasRenderingContext2D | null>(null)

  const isDrawing = useRef(false)
  const lastX = useRef(0)
  const lastY = useRef(0)

  const mode = useDrawStore(state => state.mode)
  const lineWidth = useDrawStore(state => state.lineWidth)
  const lineJoin = useDrawStore(state => state.lineJoin)
  const strokeStyle = useDrawStore(state => state.strokeStyle)
  const shadowColor = useDrawStore(state => state.shadowColor)
  const shadowBlur = useDrawStore(state => state.shadowBlur)
  const globalAlpha = useDrawStore(state => state.globalAlpha)
  const eraseRadius = useDrawStore(state => state.eraseRadius)

  const handleMouseDown = (ev: MouseEvent) => {
    isDrawing.current = true

    lastX.current = ev.offsetX
    lastY.current = ev.offsetY
  }

  const handleMouseUp = () => (isDrawing.current = false)
  const handleMouseOut = () => (isDrawing.current = false)

  const handleMouseMove = useCallback(
    (ev: MouseEvent) => {
      if (!isDrawing.current || !contextRef.current) return
      const ctx = contextRef.current
      if (!ctx) return

      const { offsetX: x, offsetY: y } = ev

      ctx.lineCap = 'round'
      ctx.beginPath()

      switch (mode) {
        case DRAW_MODE.PEN:
          ctx.globalCompositeOperation = 'source-over'
          ctx.translate(0.5, 0.5)
          ctx.moveTo(lastX.current, lastY.current)
          ctx.lineTo(x, y)
          ctx.translate(-0.5, -0.5)
          ctx.stroke()
          break

        case DRAW_MODE.ERASE:
          ctx.globalCompositeOperation = 'destination-out'
          ctx.arc(lastX.current, lastY.current, eraseRadius, 0, Math.PI * 2, false)
          ctx.fill()
          break
      }

      lastX.current = x
      lastY.current = y
    },
    [mode, eraseRadius]
  )

  useLayoutEffect(() => {
    const parent = parentRef.current
    const canvas = canvasRef.current

    if (!parent || !canvas) return

    scaleCanvas(canvas, parent)

    const context = canvas.getContext('2d')
    if (!context) return

    contextRef.current = context
  }, [])

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [handleMouseMove])

  useEffect(() => {
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  useEffect(() => {
    const ctx = contextRef.current
    if (!ctx) return

    ctx.lineWidth = lineWidth
  }, [lineWidth])

  useEffect(() => {
    const ctx = contextRef.current
    if (!ctx) return

    ctx.lineJoin = lineJoin
  }, [lineJoin])

  useEffect(() => {
    const ctx = contextRef.current
    if (!ctx) return

    ctx.globalAlpha = globalAlpha
  }, [globalAlpha])

  useEffect(() => {
    const ctx = contextRef.current
    if (!ctx) return

    ctx.strokeStyle = strokeStyle
  }, [strokeStyle])

  useEffect(() => {
    const ctx = contextRef.current
    if (!ctx) return

    ctx.shadowColor = shadowColor
  }, [shadowColor])

  useEffect(() => {
    const ctx = contextRef.current
    if (!ctx) return

    ctx.shadowBlur = shadowBlur
  }, [shadowBlur])

  const file = useOutputStore(state => state.file)
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = contextRef.current

    if (!canvas || !ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }, [file])

  return (
    <div
      ref={parentRef}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 1,
        userSelect: 'none'
        // opacity: 1
      }}
      onMouseOut={handleMouseOut}
    >
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  )
}
