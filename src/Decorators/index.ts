export function logMethod (target: Object, methodName: string, descriptor:PropertyDescriptor) {
  const method = descriptor.value
  descriptor.value = function (...args: any[]) {
    const parameters = args.map(entry => JSON.stringify(entry)).join()
    const result = method.apply(this, args)
    const r = JSON.stringify(result)
    console.log(`Call: ${methodName}(${parameters}) => ${r}`)
    return result
  }
  return descriptor
}
